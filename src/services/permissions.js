
const has_access = (permission, permissions) => {
    const access = permissions[permission];

    if(typeof access == 'boolean') return access;

    return false;
}

const merge_permission = (group_permission, user_permission)=> {
    var merged_permissions = {};

    Object.entries(group_permission).forEach(([key, value]) => {
        merged_permissions[key] = value;
        
    })
    Object.entries(user_permission).forEach(([key, value]) => {
        merged_permissions[key] = value;
    })

    return merged_permissions;
}


module.exports = {
    merge_permission,
    has_access
}