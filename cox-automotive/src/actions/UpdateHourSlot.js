export default function updateHourSlot(hourSlot, name, number) {
    return {
        type: 'UPDATE_HOUR_SLOT',
        hourSlot: hourSlot,
        name: name,
        number: number
    };
}