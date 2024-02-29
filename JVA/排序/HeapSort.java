package JVA.排序;
//堆排序的思想就是先将待排序的序列建成大根堆，
//使得每个父节点的元素大于等于它的子节点。
//此时整个序列最大值即为堆顶元素，
//我们将其与末尾元素交换，
//使末尾元素为最大值，然
//后再调整堆顶元素使得剩下的 n−1n-1n−1 个元素仍为大根堆，
//再重复执行以上操作我们即能得到一个有序的序列。

public class HeapSort {
    public static void main(String[] args) {
        int[] arr = new int[]{3, 2, 1, 5, 4, 6, 7, 8, 9, 10};
        System.out.println("Before sort:"+ java.util.Arrays.toString(arr));
        heapSort(arr);
        System.out.println("After sort:"+ java.util.Arrays.toString(arr));
    }

    public static void heapSort(int[] nums) {
        int len = nums.length - 1;
        buildMaxHeap(nums, len);
        for (int i = len; i >= 1; --i) {
            swap(nums, i, 0);
            len -= 1;
            maxHeapify(nums, 0, len);
        }
    }

    public static void buildMaxHeap(int[] nums, int len) {
        for (int i = len / 2; i >= 0; --i) {
            maxHeapify(nums, i, len);
        }
    }

    public static void maxHeapify(int[] nums, int i, int len) {
        for (; (i << 1) + 1 <= len;) {
            int lson = (i << 1) + 1;
            int rson = (i << 1) + 2;
            int large;
            if (lson <= len && nums[lson] > nums[i]) {
                large = lson;
            } else {
                large = i;
            }
            if (rson <= len && nums[rson] > nums[large]) {
                large = rson;
            }
            if (large != i) {
                swap(nums, i, large);
                i = large;
            } else {
                break;
            }
        }
    }

    private static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

}
