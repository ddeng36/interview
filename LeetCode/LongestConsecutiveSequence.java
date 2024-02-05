package LeetCode;

import java.util.HashSet;
import java.util.Set;

public class LongestConsecutiveSequence {
    public static void main(String[] args) {
        System.out.println(tes(new int[]{100,4,200,1,3,2}));
    }
    public static int tes(int[] nums){
        // 1. add all nums into set.
        Set<Integer> set = new HashSet<>();
        for(int num : nums){
            set.add(num);
        }

        // 2. starting decrease for every entry.
        int res = 0;
        for(int cur : set){
            if(!set.contains(cur-1)){
                int next = cur++;
                int len = 0;
                while(set.contains(next)){
                    next++;
                    len++;
                }
                res = Math.max(len,res);
            }
        }
        return res;
    }
}
