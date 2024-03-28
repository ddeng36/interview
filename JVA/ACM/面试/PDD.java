
public class PDD {
    // 这里有几个正整数，a1，…,anAlice 会先去掉其中最多 d个数Bob 接下来会将剩余的数中最多m个数乘以 -kAlice 想要剩余数之和尽可能大，Bob 想要剩余数之和尽可能小。假设 Alice 和Bob 都足够聪明，请问最后剩余数之和是多少。
    // 输入描述 第一行一个正整数 T，接下来有 T组数据每组数据 2行第一行4个数n,m,k,d(2≤n≤10)(0≤m,d≤n)(1SkS10')第二行n个数，a1, a2,·..,a„ (1 ≤ai ≤ 10°)
    // 输出描述 每组数据输出一行，每行一个数，表示剩余数之和
    // 示例1 
    // 输入
    // 1
    // 3 1 1 1
    // 4 1 1
    // 输出
    // 0
    // 说明 Alice会去掉4，此时剩余数为[1,1]Bob会把一个1变为-1，此时剩余数为[-1,1]，和为0
    
    // 示例2
    // 输入
    // 1
    // 3 1 1 1
    // 4 3 2
    // 输出
    // 1
    // 说明Alice不会去掉任何数Bob会把4变为-4，此时剩余数为[-4,3,2]，和为1

    // 示例3
    // 输入
    // 2
    // 5 4 2 0
    // 3 5 1 4 1
    // 10 4 1 6
    // 1 8 2 9 3 3 4 5 3 200
    // 输出
    // -25
    // -9  
    public static void main1(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();

        while (T-- > 0) {
            int n = scanner.nextInt();
            int m = scanner.nextInt();
            int k = scanner.nextInt();
            int d = scanner.nextInt();

            Integer[] a = new Integer[n];
            for (int i = 0; i < n; i++) {
                a[i] = scanner.nextInt();
            }

            Arrays.sort(a, Collections.reverseOrder());
            for (int i = 0; i < d; i++) {
                a[i] = null;
            }

            PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
            for (int num : a) {
                if (num != null) {
                    maxHeap.add(num);
                }
            }

            for (int i = 0; i < m; i++) {
                if (!maxHeap.isEmpty()) {
                    int maxNum = maxHeap.poll();
                    maxHeap.add(-k * maxNum);
                }
            }

            int sum = 0;
            while (!maxHeap.isEmpty()) {
                sum += maxHeap.poll();
            }

            System.out.println(sum);
        }

        scanner.close();
    }

    // 伊文有两个由0和1组成的字符串，A和B，长度分别为m和n(m>=n)。伊文希望取出A的连续子串与B构造若千长度为n的S串，满足:Si = Ax+i 异或 Bi
    // S1 异或 S2 异或...异或 Sn = 0
    // 伊文想知道总共能够构造出多少个不同的S串。
    // 输入描述
    // 输入有三行，第一行2个数m和n，为A和B的长度;
    // m,n(0<n≤m≤5x10)第二行为长度为m的A串第三行为长度为n的B串，A和B仅由'0'和'1'组成
    // 输出描述
    // 输出:一个数字，代表不同的S串个数
    // 输入
    // 8 2
    // 10100000
    // 10
    // 输出
    // 2
    // 说明
    // 符合条件的S串为[“00","11”]，分别由A的子串[“10",“01”]与B串得到
    public static void main2(String[] args){

    }
}