const randomGenerator = (len: number, seed?: number): number => {
    if (len <= 0) {
        throw new Error("Length must be greater than 0");
    }

    const dateSeed = new Date().getTime();
    const effectiveSeed = seed !== undefined ? seed : dateSeed;

    const a = 1664525; // Multiplier
    const c = 1013904223; // Increment
    const m = 2 ** 32; // Modulus

    const randomValue = (a * effectiveSeed + c) % m;

    return Math.floor((randomValue / m) * len) % len;
};

export default randomGenerator;