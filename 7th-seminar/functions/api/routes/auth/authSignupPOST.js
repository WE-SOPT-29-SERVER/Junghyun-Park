// signUp엔드포인트. firebase에서 어떻게 유저를 회원가입 시키는지
const admin = require('firebase-admin');  // admin은 firebase에서 뭔가를 사용할 때 쓰는 코드
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');

const jwtHandlers = require('../../../lib/jwtHandlers');

module.exports = async (req, res) => {
  const { email, name, phone, password } = req.body;

  // request body가 잘못됐을 때
  if (!email || !name || !phone || !password) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  let client;

  try {
    const client = await db.connect();

    const userFirebase = await admin
      .auth()
      .createUser({ email, password, name })  // firebase상의 유저를 만들어줌.
      .then((user) => user)     // 만들어진 유저를 반환. 그걸 userFirebase가 갖고있겠다.
      .catch((e) => {
        console.log(e);
        return { err: true, error: e };
      });

      // 에러 코드에 따른 response
    if (userFirebase.err) {
      if (userFirebase.error.code === 'auth/email-already-exists') {
        return res.status(statusCode.NOT_FOUND).json(util.fail(statusCode.NOT_FOUND, '해당 이메일을 가진 유저가 있습니다.'));
      } else if (userFirebase.error.code === 'auth/invalid-password') {
        return res.status(statusCode.NOT_FOUND).json(util.fail(statusCode.NOT_FOUND, '비밀번호 형식이 잘못되었습니다. 패스워드는 최소 6자리의 문자열이어야 합니다.'));
      } else {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      }
    }

    // 유저가 잘 생성됐으면, 생성된 유저 안에 uid라는 필드를 갖고와서
    const idFirebase = userFirebase.uid;

    // sql에서 유저 생성, 이 유저를 바탕으로 jwt토큰 생성
    const user = await userDB.addUser(client, email, name, phone, idFirebase);
    const { accesstoken } = jwtHandlers.sign(user);

    console.log(user);

    // 유저와 토큰을 클라이언트에게 모두 전송
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, { user, accesstoken }));
  } catch (error) {
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};