function jumlahmaximumberurut(nums) {
  let maksimalberurut = 0;
  let nilaiAwal = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      nilaiAwal++;
      maksimalberurut = Math.max(maksimalberurut, nilaiAwal);
    } else {
      nilaiAwal = 0;
    }
  }

  return maksimalberurut;
}
console.log(jumlahmaximumberurut([1, 1, 0, 1, 1, 1]));
console.log(jumlahmaximumberurut([1, 0, 0, 1, 0, 1, 1]));
