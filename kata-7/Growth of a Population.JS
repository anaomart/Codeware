function nbYear(p0, percent, aug, p) {
    let years = percent > 0 ? 0 : -1;
    while (p0 <= p) {
        Add_percent = (p0 * percent) / 100;
        Add_percent;
        p0 = +(p0 + Add_percent + aug).toFixed(0);

        years++;
    }

    return years;
}

console.log(nbYear(1000, 2, 50, 1214));