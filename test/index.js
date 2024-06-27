const { generatePassword } = require("..");

const password = generatePassword(24, {
    special: { active: true, times: 1 },
    chinese: { active: true, times: 1 },
    japanese: { active: true, times: 1 },
    arabic: { active: true, times: 1 },
    cyrillic: { active: true, times: 1 },
    greek: { active: true, times: 1 },
    hebrew: { active: true, times: 1 },
    rongoRongo: { active: true, times: 1 },
});

console.log(password);
