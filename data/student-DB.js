const student = [
    {student: John, SEIstudent: true},
    {student: Felix, SEIstudent: true},
    {student: Tessa, SEIstudent: true},
    {student: MisterDonut, SEIstudent: false}
];

module.exports = {
    getAll: function() {
        return student;
    }
};