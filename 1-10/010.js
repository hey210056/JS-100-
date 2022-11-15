function star(num){
    for(let i = 1, j = 0; i<=num; i++){
        console.log(" ".repeat(num - i) + "*".repeat(i + j));
        j = j + 1;
  }
}

star(5);
