// Que 1.) write a program to find sum of N natural number

// Ans a.)
            let n =10;
            let sum = 0;
            for(i=1;i<=n;i++){
                sum = sum+i;
            }
            console.log(sum)

            // sum = sum + i++

            //  sum = 0; i = 1
            //  sum = 0+1  sum= 1

            //  sum = 1; i = 2
            //  sum = 1+2; sum = 3

            //  sum = 3; i = 3
            //  sum = 3+3; sum = 6

            //  sum = 6; i = 4
            //  sum = 6+4; sum =10

            // sum = 10; i = 5;
            // sum = 10+5; sum = 15;

            // sum = 15; i = 6;
            // sum = 15+6; sum = 21;

            // sum = 21; i = 7;
            // sum = 21+7; sum = 28;

            // sum = 28; i = 8;
            // sum = 28+8; sum = 36;

            // sum = 36; i = 9;
            // sum = 36+9; sum = 45;

            // sum = 45; i = 10;
            // sum = 45+10; sum = 55;

            // Ans-> "The sum of 10 natural number is: " 55.

// Ans b.)  
            function Sortadd(n){
                return(n*(n+1)/2)
            }
            let total = Sortadd(n);
            console.log(total)

            // 10*(10+1)/2
            // 10*(11)/2
            // 10*(5.5)
            // 55

//  Ans c.) 
            let m = 4;
            function Nestadd(m){
                let sum1 = 0;
                for(i=1;i<=m;i++){
                    for(j=1;j<=i;j++){
                        sum1++;
                    }
                    return sum1;
                }
            }
            let total1 = Nestadd(4);
                console.log(total1)

            // sum1 = 0 ; sum++
            // for iteration i = 1
                        // for iteration j = 1      
                        // when j = 1 && i = 1;     j=i
                        // sum = 0+1; sum = 1;

                        // for iteration j = 2
                        // when j = 2 && i = 1;     j<=i : false
                        // terminate
            
            // for iteration i = 2
                        // for iteration j = 1 
                        // when j = 1 && i = 2 ;    j<i : true
                        // sum = 1+1; sum = 2;
                        
                        // for iteration j = 2
                        // when j = 2 && i = 2;     j=i : true
                        // sum = 2+1; sum = 3;      

                        // for iteration j = 3
                        // when j = 3 && i = 2      j<=i : fasle
                        // termination
            
            // for iteration i = 3
                        // for iteration j = 1 
                        // when j = 1 && i = 3     j<i : true
                        // sum = 3+1; sum=4;

                        // for iteration j = 2
                        // when j = 2 && i = 3      j<i : true
                        // sum = 4+1; sum = 5;

                        // for iteration j = 3
                        // when j = 3 && i = 3      j=i : true
                        // sum = 5+1; sum=6;

                        // for iteration j = 4
                        // when j = 4 && i = 4      j<=i : false
                        // terminate

            // for iteration i = 4;
                        // for iteration j = 1
                        // when j = 1 && i = 4      j<i : true
                        // sum = 6+1; sum=7;

                        // for iteration j = 2
                        // when j = 2 && i = 4       j<i : true
                        // sum = 7+1; sum=8;

                        // for iteration j = 3
                        // when j = 3 && i = 4      j<i : true
                        // sum = 8+1; sum=9;

                        // for iteration j = 4
                        // when j = 4 && i = 4      j=i : true
                        // sum = 9+1; sum =10;

                        // for iteration j = 5
                        // when j = 5 && i = 4      j<=i : false
                        // terminate
            
            // for iteration i = 5 && m = 4;
                // where i<=m : false that's why
                // terminates here
            
            // Ans is 10  = (1+2+3+4)