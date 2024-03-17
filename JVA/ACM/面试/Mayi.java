package JVA.ACM.面试;

//以下是ACM模式

// 单行输入 
// 输入
// 1 1
// 输出
// 2
// import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner in = new Scanner(System.in);
//         while (in.hasNextInt()) {// 注意，如果输入是多个测试用例，请通过while循环处理多个测试用例
//             int a = in.nextInt();
//             int b = in.nextInt();
//             System.out.println(a + b);
//         }
//     }
// }
// 多行输入
// 输入描述：输入一个n，表示阶数，然后输入n行n列的矩阵
// 输除描述：输出一个词证书表示n阶方阵的和
// 输入
// 3
// 1 2 3
// 2 1 3
// 3 2 1
// 本题为考试多行输入输出规范示例，无需提交，不计分。
// 答案
// import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int ans = 0, x;
//         for(int i = 0; i < n; i++){
//             for(int j = 0; j < n; j++){
//                 x = sc.nextInt();
//                 ans += x;
//             }
//         } 
//         System.out.println(ans);
//     }
// }

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

public class Mayi {
    // 题目描述：众所周知，在一些消费支付的场合中，往往有“支付宝九五折“的优惠。这天小苯来到了超市购买物品，一共有
    // n种物品，每种物品只能购买一个，但有的物品支持优惠活动，有的并不支持。恰好本超市的结账是有“支付宝九五折”优惠的，小苯的支付宝余额还剩
    // ん元，他想知道他仅使用支付宝进行支付的话，最多能买几件物的?
    // 输入描述：输入包含三行。第一行两个正整数n,h(1≤n≤ 10^5),(1≤k≤ 10^9)第二行包含 几 个正整数a;(1 ≤ a;≤
    // 104)表示每个物品的价格.第三行一个长度为 7 的只含有0和 1的字符申，表示每个物品是否支持优惠。(如果是 1代表第:个物品支持优惠，否则不支持。)
    // 输出描述：输出一行一个整数表示答案
    // 输入
    // 5 9
    // 3 4 2 3 1
    // 11101
    // 输出
    // 4
    // 说明
    // 购买1,3,4,5号物

    public static void main1(String[] args) {
                Scanner sc = new Scanner(System.in);
                int n = sc.nextInt();
                int k = sc.nextInt();
                int[] prices = new int[n];
                for (int i = 0; i < n; i++) {
                    prices[i] = sc.nextInt();
                }
                String discounts = sc.next();
        
                // 初始化动态规划数组，所有值为最小可能值
                int[] dp = new int[k+1];
                for (int i = 0; i <= k; i++) {
                    dp[i] = 0; // 初始状态：没有余额时，不能购买任何物品
                }
        
                // 动态规划求解
                for (int i = 0; i < n; i++) {
                    int price = prices[i];
                    // 计算打折后的价格
                    int discountPrice = discounts.charAt(i) == '1' ? (int)Math.ceil(price * 0.95) : price;
                    // 从大到小遍历所有余额
                    for (int j = k; j >= discountPrice; j--) {
                        dp[j] = Math.max(dp[j], dp[j - discountPrice] + 1); // 比较不购买当前物品和购买当前物品的情况
                    }
                }
        
                // 输出最大购买物品数量
                int maxItems = 0;
                for (int i = 0; i <= k; i++) {
                    maxItems = Math.max(maxItems, dp[i]);
                }
                System.out.println(maxItems);
            
        
    }

    // 小红定义一个字符串的权值是:字符串辅音数量和元音数量的差的绝对值。例如，"arcaea"的权值是 2，因为有4个元音，2
    // 个辅音，权值为|4-2l=2。现在小红拿到了一个字符串，她想把这个字符串切成两个非空字符串，需要满足两个字符串的权值相等。小红想知道，有多少种不同的切割方式?我们定义，元音有"aeiou"这五种，其余字母均为辅音。
    // 输入
    // arcaea
    // 输出
    // 2
    // 说明
    // 方案 1:"a"和"rcaea"，权值均为 1。
    // 方案 2:"arcae"和"a”，权值均为 1。

    public static void main2(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int n = s.length();
        int[] vowelsPrefixSum = new int[n + 1];
        int[] consonantsPrefixSum = new int[n + 1];

        // 预计算前缀和
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            vowelsPrefixSum[i + 1] = vowelsPrefixSum[i] + (isVowel(c) ? 1 : 0);
            consonantsPrefixSum[i + 1] = consonantsPrefixSum[i] + (isVowel(c) ? 0 : 1);
        }

        int count = 0;
        // 对于每个可能的分割点
        for (int i = 1; i < n; i++) {
            int leftVowels = vowelsPrefixSum[i];
            int leftConsonants = consonantsPrefixSum[i];
            int rightVowels = vowelsPrefixSum[n] - leftVowels;
            int rightConsonants = consonantsPrefixSum[n] - leftConsonants;

            if (Math.abs(leftVowels - leftConsonants) == Math.abs(rightVowels - rightConsonants)) {
                count++;
            }
        }
        System.out.println(count);
        sc.close();
    }

    private static boolean isVowel(char c) {
        return "aeiou".indexOf(c) >= 0;
    }

    // 小苯有一个长度为 n 的数组 a。他想要使得所有
    // a的最大公因子是一个素数。即:gcd(a1,a2，..,an)是一个素数。他可以对数组进行任意次操作。具体的:每次操作，他会选择i，j两个下标，同时执行:ai=ai+2,aj=aj-2.请问他是否有可能在任意次操作内将数组变成符合要求的，如果可以，请输出所有可能的最大公因数。注意，这里要保证
    // a;在操作后仍然是正数，即不能选择 aj< 2.
    // 输入描述:输入包含两行。第一行一个正整数n(2 ≤n ≤2x10')表示数组长度。第二行 n 个正整数a;(1 ≤ ai < 10“)表示这个数组。
    // 输出描述:输入包含一行或两行。如果可以输出“YES”，否则输出“NO(不含双引号)如果答案为“YES”，则第二行按照升序输出所有可行的数组 gcd。
    // 输入
    // 4
    // 1 3 5 9
    // 输出
    // YES
    // 3
    // 说明
    // 可以选择一次i= 1,j=3，这样一来数组变成:[3,3,3,9]，gcd=3可以证明只有 3 这一个答案。
    // 输入
    // 4
    // 2 2 2 2
    // 输出
    // YES
    // 2
    // 输入
    // 5
    // 2 4 5 6 8
    // 输出
    // NO
}