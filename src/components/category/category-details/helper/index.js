export const formatData = obj => {
    const formatted = {};

    Object.keys(obj).forEach(key => {
        let value = obj[key];

        if (!/^http/g.test(value) && value.length) {

            if (/\d{4}-\d{2}-\d{2}T/.test(value)) {
                value = new Date(value).toLocaleDateString();
            }

            formatted[key.replace(/_/g, ' ')] = value;
        }
    });

    return formatted;
};
