public class Meituan {
    // 小美拿到了一个n行m列的矩阵，她想如道该矩阵有多少个 2*2 的子矩形满足1和 0的数量相等?
    //输入描述: 第一行输入两个正整数n,m用空格隔开。接下来的n行，每行输入一个长度为m的 01 串，用来表示矩阵。2 ≤n,m < 100
    //输出描述:一个整数，代表1和0的数量相等的2*2 的子矩形数量。
    //示例：输入
    // 2 3
    // 110
    // 010
    // 输出
    // 1
    public static void main1(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        scanner.nextLine(); // Move to the next line after reading numbers

        char[][] matrix = new char[n][m];
        for (int i = 0; i < n; i++) {
            matrix[i] = scanner.nextLine().toCharArray();
        }

        int count = 0;
        for (int i = 0; i < n - 1; i++) { // n-1 and m-1 to stay within bounds
            for (int j = 0; j < m - 1; j++) {
                int ones = 0;
                int zeros = 0;

                // Count the number of 1s and 0s in the 2x2 submatrix
                for (int subI = i; subI < i + 2; subI++) {
                    for (int subJ = j; subJ < j + 2; subJ++) {
                        if (matrix[subI][subJ] == '1') {
                            ones++;
                        } else {
                            zeros++;
                        }
                    }
                }

                // Check if the number of 1s and 0s is equal
                if (ones == 2 && zeros == 2) {
                    count++;
                }
            }
        }

        System.out.println(count);
    }

    // 小美有一个长为n的字符串 s，她希望删除尽可能少的字符，使得字符串不含长度为偶数的回文子串。她想知道她最少要删除几个字符，请你帮帮她吧。子串:一个字符串从头或尾删除若干个(也可以不删)得到的结果字符串。回文:一个字符串正着读和倒着读-样，则该字符串回文。
    // 输入描述
    // 输入包含两行。第一行一个正整数 n(1 ≤n≤ 10°),表示字符串 8的长度。第二行一个长为n 的字符串 8。
    // 输出描述输出包含一行一个整数，表示最少删除数里。
    // 示例1
    // 输入
    // 5
    // aaabc
    // 输出
    // 2
    // 说明：删除aa两个字符，得到abc
    // 示例2
    // 输入
    // 1
    // e
    // 输出
    // 0
    // 说明：不需要删除字符
    public static void main2(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt(); 
        scanner.nextLine(); 
        String s = scanner.nextLine();

        int deleteCount = 0; 
        for (int i = 0; i < n; ) {
            int start = i;
            while (i < n && s.charAt(i) == s.charAt(start)) {
                i++;
            }
            deleteCount += i - start - 1;
        }
        System.out.println(deleteCount);
    }
    // 小美拿到了一个排列，其中初始所有元素都是红色，但有一些元素被染成了白色。小美每次操作可以选择交换任意两个红色元素的位置。她希望操作尽可能少的次数使得数组变成非降序，你能帮帮她吗 ?排列是指:一个长度为n的数组，其中 1到"每个元素恰好出现了一次。
    // 输入描述:第一行输入一个正整数n，代表数组的长度。第二行输入几个正整数4:，代表数组的元素。第三行输入一个长度为n的字符串，代表数组元素的染色情况。第i个字符为'R'代表第i个元素被染成红色，为"W"代表初始的白色。1 ≤n≤ 10'1<ai<n
    // 输出描述:如果无法完成排序，请输出-1。否则输出一个整数，代表操作的最小次效。
    // 示例1
    // 输入
    // 4
    // 1 3 2 4
    // 输出
    // 1
    // 说明：第一次操作，交换2和3，数组变成1 2 3 4
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = scanner.nextInt();
        }
        scanner.nextLine();
        String s = scanner.nextLine();

        int[] reds = new int[n];
        int redCount = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == 'R') {
                reds[redCount++] = a[i];
            }
        }

        Arrays.sort(reds, 0, redCount);
        int whiteIndex = 0;
        int swapCount = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == 'R') {
                if (a[i] != reds[whiteIndex]) {
                    swapCount++;
                }
                whiteIndex++;
            }
        }

        System.out.println(swapCount);
    }
    // 小美定义一个字符串的权值为:字符串长度乘以字符的种类数。例如，"arcaea"的权值为 6*4=24现在小美拿到了一个字符串，她希望你将该字符串切割成若干个连续子串，使得每个子串的权值不小于k。请你求出最终最多可以切割出的子串数量。请注意，由于字符串过长，给出的字符串将是以连续段长度形式给出，例如:aabbaaa 将描述为a(2)b(2)a(3)，aaaaaaaaaaaab 将描述为 a(12)b(1)。
    // 输入描述 第一行输入一个两个正整数n,k，代表原字符串长度和每个子串至少应取的权目o第二行一个仅包含小写字母、数字和括号的字符串。长度不超过106。保证所有括号内的数字之和恰好等于n，给定的每个字母后面必然包含一个括号加数字。1 ≤ k,n ≤ 10^18
    // 示例1
    // 7 6
    // a(2)b(2)a(3)
    // 输出
    // 2
    // 说明
    // 该字符串表示为"aabbaaa”，切割成"aab"和"baaa"即可。
    // 示例2
    // 输入
    // 1000000000 5
    // x(1000000000)
    // 输出
    // 200000000
    // 说明
    // 该字符串表示为"xxx...…x"，共有109个x，可以切割成 200000000个”xoox
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long n = scanner.nextLong();
        long k = scanner.nextLong();
        scanner.nextLine();
        String s = scanner.nextLine();

        long count = 0;
        long weight = 0;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            long length = 0;
            while (s.length() > i + 1 
             && Character.isDigit(s.charAt(i + 1))) {
                length = length * 10 + (s.charAt(i + 1) - '0');
                i++;
            }
            weight += length;
            count += weight >= k ? 1 : 0;
        }

        System.out.println(count);
    }
    //有一棵有几个节点的树，小美在s节点，要去t节点。但小美是经常迷路的孩子，她不知道该怎么走，因此她每次都会随机选择一条之前没有走过的边走，小美想知道她能到达t节点的概率是多少。有多次询问，每次询问需要求出小美能到达t节点的概率对 10°+7取模后的结果。如果最后答案为分数，则最简分式后的形式为一，其中a和b互质，那么输出整数 т 使得
    // 输入描述：第一行输入一个整数n(1≤n≤2x10”)表示树节点个效。接下来n-1行，每行输入两个整数u, υ(1 ≤ u,u≤ n)表示树上的边。接下来一行，输入一个整数q(1 ≤q≤2x 10°)表示询问次数。接下来9行，每行输入两个整数s,t(1 < s,t< n)表示询问。
    // 输出描述：输出q行，每行输出一个整数表示概率。
    // 示例1
    // 输入
    // 3
    // 1 2
    // 1 3
    // 2
    // 2 3
    // 1 3   
    // 输出
    // 1
    // 500000004
    // 说明
    // 第1个询问:小美有1的概率从节点2走到节点1，然后有1的概率从节点1走到节点3，因此有1的概率能到达节点3。1对1000000007取模后的结果为1。第2个询问:小美有1/2的概率从节点1走到节点2，有12的概率从节点1走到节点3，因此只有1/2的概率能到达节点3，1/2对1000000007取模后的结果为500000004。
    
}
