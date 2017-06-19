// triggers on test trigger with a certain tag
const triggerTest = (z, bundle) => {
    const responsePromise = z.request({
        url: 'https://requestb.in/1954lhj1',
        params: {
            type: bundle.inputData.type
        }
    });
    return responsePromise
        .then(response => {
            // just return junk 
            return [{
                id: 5
            }];
        });
};

module.exports = {
    key: 'test',
    noun: 'Test',

    display: {
        label: 'Do Test',
        description: 'Triggers on a new test trigger.'
    },

    operation: {
        inputFields: [{
            key: 'type',
            label: 'Type'
        }],
        perform: triggerTest
    }
};
