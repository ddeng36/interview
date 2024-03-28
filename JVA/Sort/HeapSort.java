package JVA.Sort;
//堆排序的思想就是先将待排序的序列建成大根堆，

//使得每个父节点的元素大于等于它的子节点。
//此时整个序列最大值即为堆顶元素，
//我们将其与末尾元素交换，
//使末尾元素为最大值，然
//后再调整堆顶元素使得剩下的 n−1n-1n−1 个元素仍为大根堆，
//再重复执行以上操作我们即能得到一个有序的序列。

public class HeapSort {
    public static void main(String[] args) {
        int[] arr = new int[] { 3, 2, 1, 5, 4, 6, 7, 8, 9, 10 };
        System.out.println("Before sort:" + java.util.Arrays.toString(arr));
        heapSort(arr);
        System.out.println(arr[10 - 4]);
        System.out.println("After sort:" + java.util.Arrays.toString(arr));
    }

    // Global variable that records the length of an array;
    static int heapLen;

    /**
     * Swap the two elements of an array
     * 
     * @param arr
     * @param i
     * @param j
     */
    private static void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    /**
     * Build Max Heap
     * 
     * @param arr
     */
    private static void buildMaxHeap(int[] arr) {
        for (int i = arr.length / 2 - 1; i >= 0; i--) {
            heapify(arr, i);
        }
    }

    /**
     * Adjust it to the maximum heap
     * 
     * @param arr
     * @param i
     */
    private static void heapify(int[] arr, int i) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int largest = i;
        if (right < heapLen && arr[right] > arr[largest]) {
            largest = right;
        }
        if (left < heapLen && arr[left] > arr[largest]) {
            largest = left;
        }
        if (largest != i) {
            swap(arr, largest, i);
            heapify(arr, largest);
        }
    }

    /**
     * Heap Sort
     * 
     * @param arr
     * @return
     */
    public static int[] heapSort(int[] arr) {
        // index at the end of the heap
        heapLen = arr.length;
        // build MaxHeap
        buildMaxHeap(arr);
        for (int i = arr.length - 1; i > 0; i--) {
            // Move the top of the heap to the tail of the heap in turn
            swap(arr, i, 0);
            heapLen -= 1;
            heapify(arr, 0);
        }
        return arr;
    }

}
