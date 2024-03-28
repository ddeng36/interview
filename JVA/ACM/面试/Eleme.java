package JVA.ACM.面试;

public class Eleme {
    public static void main1(){
        // 小红拿到了a个红球，6个紫球，c个黑球。她准备把这些球装进一些盒子里，但有以下限制:1.每个红球所在盒子里的球数不超过2.2.每个紫球所在盒子里的球数不少于3。黑球则没有限制。现在小红希望你求出:最少用多少盒子可以装下所有球，最多用多少盒子装下所有球
        // 输入描述
        // 第一行输入一个正整数q，代表询问次数。接下来的4行，每行输入三个正整数a,6,c，代表一次询问。
        // 输出描述
        // 输出q行。如果不存在合法的方案，则输出-1。否则输出两个正整数，分别代表盒子数量的最小值和最大值。
        // 输入
        // 2
        // 3 3 3
        // 1 1 1
        // 输出
        // 3 7
        // -1
        // 说明
        // 第一组询问，盒子数最少的方案是:【红黑】，【红红】【紫紫紫黑黑】。盒子数最多的方案是:【红】【红】，【红】，【黑】，【黑】，【黑】，【紫柴萦】第二组询问，显然不存在一种合法的方案。
        import java.util.Scanner;

        public class Eleme {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                int q = sc.nextInt(); 
                for (int i = 0; i < q; i++) {
                    int a = sc.nextInt();
                    int b = sc.nextInt(); 
                    int c = sc.nextInt(); 
        
                    int minBoxes = (a + 1) / 2; 
                    minBoxes += (b + 2) / 3; 
                    int maxBoxes = a + b + c;
        
                    int incompleteRedBoxes = a % 2;
                    int incompletePurpleBoxes = 3 - b % 3;
                    incompletePurpleBoxes = incompletePurpleBoxes == 3 ? 0 : incompletePurpleBoxes; // Fix for exact multiples of 3
                    int blackBallsNeeded = incompleteRedBoxes + incompletePurpleBoxes;
        
                     if (c >= blackBallsNeeded) {
                        maxBoxes -= blackBallsNeeded;
                    } else {
                        maxBoxes -= c;
                    }
        
                    if ((b > 0 && b < 3) && (a < 2 * incompletePurpleBoxes && c < incompletePurpleBoxes)) {
                        System.out.println(-1);
                    } else {
                        System.out.println(minBoxes + " " + maxBoxes);
                    }
                }
        
                sc.close();
            }
        }
        
    }
    public static void main2(){
        // 小红和小朋友们排队领糖果，第i个小朋友排在队伍的第i个位置。第i个小朋友想要获得 a1个糖果。每次队首的小朋友可以获得m个糖果，如果小朋友目前手里不足 a1 个糖果，就排到队尾继续领糖果，否则离开队伍。小红想知道，小朋友离开队伍的顺序是什么。
        // 输入描述
        //第1行输入两个整数 n 和 m，表示小朋友的数量和每次队首小朋友可以获得的糖果数量。2行输入 几 个整数 a1,a2，…,an，表示每个小朋友想要获得的糖果数量。
        // 输出描述
        // 输出一行，包含n个整数，表示小朋友离开队伍的顺序。
        // 示例1
        // 输入
        // 5 3
        // 1 10 9 4 7
        // 输出
        // 1 4 3 5 2
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt(); 
            int m = sc.nextInt();
            int[] candyNeeded = new int[n];
            for (int i = 0; i < n; i++) {
                candyNeeded[i] = sc.nextInt();
            }
    
            Queue<Integer> queue = new LinkedList<>();
            for (int i = 0; i < n; i++) {
                queue.add(i);
    
            List<Integer> leavingOrder = new ArrayList<>();
            while (!queue.isEmpty()) {
                int child = queue.poll(); 
                 candyNeeded[child] -= m;
    
                if (candyNeeded[child] > 0) {
                    queue.add(child);
                } else {
                    leavingOrder.add(child + 1);}
            }
    
            for (int index : leavingOrder) {
                System.out.print(index + " ");
            }
    
            sc.close();
        
    }
    public static void main3() {
        // 小红在玩一个一维的扫雷，雷用“*"表示，未知的区域用"?"表示。如果确定一个地方没有雷，这个位置都有个数字(0 到 2)，表示这个位置左右两边的雷的数量，现在小红想知道当前局面有多少种可能的雷的分布情况。
        // 输入描述
        // 第一行一个字符串，仅包含"*?012"，表示当前局面。字符串长度不超过 100000。
        // 输出描述
        // 输出一个整数，表示当前局面有多少种可能的雷的分布情况。答案可能很大，请输出答案除以 10^9+7的余数。
        // 输入
        // ??**2?11??
        // 输出
        // 8 
        // 说明
        // 1***2*11*1
        // 01**2*11*1
        // *2**2*11*1
        // ****2*11*1
        // 1***2*11**
        // 01**2*11**
        // *2**2*11**
        // ****2*11**
        function countDistributions(field) {
            const MOD = 1000000007;
            let n = field.length;
            let dp = Array.from({length: n + 1}, () => Array(2).fill(0));
            
            dp[0][0] = 1; 
            for (let i = 1; i <= n; i++) {
                let char = field[i - 1];
                
                  if (char === '?') {
                    dp[i][0] = (dp[i - 1][0] + dp[i - 1][1]) % MOD; // No mine here, both previous states are okay
                    dp[i][1] = (dp[i - 1][0]) % MOD; // Mine here, previous state must be no mine
                }
                 }
            
           return (dp[n][0] + dp[n][1]) % MOD;
        }
        
    }
}
