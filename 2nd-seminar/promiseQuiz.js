const members = require("./members2")

const getOnline = members =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(o => o.location === "online");
            resolve(data);
        }, 500);
    });
};

const getOffline = members =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(o => o.location === "offline");
            resolve(data);
        }, 500);
    });
};

const getYB = members =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const data = members.filter(o => o.group === "YB");
            resolve(data);
        }, 500);
    });
};

const getOB = members =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(o => o.group === "OB");
            resolve(data);
        }, 500);
    });
};

getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);

const asyncFunc = async members => {
    const onlineMembers = await getOnline(members);
    const onlineOblineMembers = await getOB(onlineMembers);
    const offlineMembers = await getOffline(members);
    const offlineYbMembers = await getYB(offlineMembers);

    console.log(onlineOblineMembers);
    console.log(offlineYbMembers);
};