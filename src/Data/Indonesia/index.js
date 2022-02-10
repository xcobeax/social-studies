import dataJson from './indonesia.json'
export const data = dataJson.parent
export const getDetail = (id) => new Promise((resolve, reject) => {
    const resp = dataJson.children
    if (resp) {
        resolve(resp.filter(e => e.groupId === id))
    }
    reject("Error")
})