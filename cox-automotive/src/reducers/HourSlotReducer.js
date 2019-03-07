const hourSlot = [
    {
        hour: '9:00 AM ~ 10:00 AM',
        availability: true,
        name: '',
        number: ''
    },
    {
        hour: '10:00 AM ~ 11:00 AM',
        availability: true,
        name: '',
        number: ''
    },
    {
        hour: '11:00 AM ~ 12:00 PM',
        availability: true,
        name: '',
        number: ''
    },
    {
        hour: '12:00 PM ~ 1:00 PM',
        availability: true,
        name: '',
        number: ''
    },
    {
        hour: '1:00 PM ~ 2:00 PM',
        availability: true,
        name: '',
        number: ''
    },
    {
        hour: '2:00 PM ~ 3:00 PM',
        availability: true,
        name: '',
        number: ''
    },
    {
        hour: '3:00 PM ~ 4:00 PM',
        availability: true,
        name: '',
        number: ''
    },
    {
        hour: '4:00 PM ~ 5:00 PM',
        availability: true,
        name: '',
        number: ''
    }
];

export default function (state = hourSlot, action) {
    if (action.type === 'UPDATE_HOUR_SLOT') {
        const index = hourSlot.findIndex((slot) => {
            return action.hourSlot === slot.hour;
        });
        const update = {
            availability: false,
            name: action.name,
            number: action.number
        };
        const updatedHourSlot = Object.assign(hourSlot[index], update);
        return [
            ...hourSlot.slice(0, index),
            updatedHourSlot,
            ...hourSlot.slice(index + 1)
        ];
    }
    return state;
}