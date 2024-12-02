document.getElementById('calculateBtn').addEventListener('click', function () {
    const dobInput = document.getElementById('dob').value;

    if (!dobInput) {
        alert("Please select your date of birth.");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    const result = document.getElementById('result');
    result.innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
