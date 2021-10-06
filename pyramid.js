

function daechulCode() {
    for (let firstI = 3; firstI > 0; firstI--) {
        let a = "";

        for (let secondI = 1; secondI <= 3; secondI++) {
            if (secondI >= firstI) {
                a = a + "*";
            } else {
                a = a + " ";
            }
        }

        for (let i = 0; i < 2; i++) {
            if (firstI + i < 3) {
                a = a + "*";
            } else {
                a = a + " ";
            }
        }

        console.log(a);
    }

}

daechulCode();


// 마크 

// 20살 초반에

// 실리콘밸리

// CTO
// manager
// senior developer 25살 ~30살
// interme developer
// junior developer
// entry developer


// 프로그래머 수명은 45살에서 50살


// let a = [1, 2, 3, 4];

// a[0];
// a[1];
// a[2];;

// for()

// 3 - 2 1;
// 2 - 2 0;
// 1 - 2 - 1;

// 1. 왼쪽 피라미드 먼저 와성
// 2. 오른쪽 피라미드 먼저 완성
// 3. 한 row에 총 5칸을 써야함
