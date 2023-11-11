function twiceAsOld(dadAge, sonAge) {
  let answer = 0;
  let modDadAge = dadAge;
  let modSonAge = sonAge;
  if (dadAge / 2 === sonAge) {
    return 0;
  } else {
    for (let i = 0; i < dadAge; i++) {
      modDadAge++;
      modSonAge++;
      answer++;
      if (modDadAge / 2 === modSonAge) {
        return answer;
      } else {
        let answer = 0;
        for (let i = 0; i < dadAge; i++) {
          dadAge--;
          sonAge--;
          answer++;
          if (dadAge / 2 === sonAge) {
            return answer;
          }
        }
      }
    }
  }
}




console.log(twiceAsOld(29,0));