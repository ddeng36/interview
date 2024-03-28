package JVA.DataSructure;

public class SkipList {

    /**
     * 跳表索引最大高度为16
     */
    private static final int MAX_LEVEL = 16;

    /**
     * 每个节点添加一层索引高度的概率为二分之一
     */
    private static final float PROB = 0.5f;

    /**
     * 默认情况下的高度为1，即只有自己一个节点
     */
    private int levelCount = 1;

    /**
     * 跳表最底层的节点，即头节点
     */
    private Node h = new Node();

    public SkipList() {}

    public class Node {
        private int data = -1;
        private Node[] forwards = new Node[MAX_LEVEL];
        private int maxLevel = 0;

        @Override
        public String toString() {
            return "Node{" +
                "data=" + data +
                ", maxLevel=" + maxLevel +
                '}';
        }
    }

    public void add(int value) {

        //随机生成高度
        int level = randomLevel();

        Node newNode = new Node();
        newNode.data = value;
        newNode.maxLevel = level;

        //创建一个node数组，用于记录小于当前value的最大值
        Node[] maxOfMinArr = new Node[level];
        //默认情况下指向头节点
        for (int i = 0; i < level; i++) {
            maxOfMinArr[i] = h;
        }

        //基于上述结果拿到当前节点的后继节点
        Node p = h;
        for (int i = level - 1; i >= 0; i--) {
            while (p.forwards[i] != null && p.forwards[i].data < value) {
                p = p.forwards[i];
            }
            maxOfMinArr[i] = p;
        }

        //更新前驱节点的后继节点为当前节点newNode
        for (int i = 0; i < level; i++) {
            newNode.forwards[i] = maxOfMinArr[i].forwards[i];
            maxOfMinArr[i].forwards[i] = newNode;
        }

        //如果当前newNode高度大于跳表最高高度则更新levelCount
        if (levelCount < level) {
            levelCount = level;
        }

    }

    /**
     * 理论来讲，一级索引中元素个数应该占原始数据的 50%，二级索引中元素个数占 25%，三级索引12.5% ，一直到最顶层。
     * 因为这里每一层的晋升概率是 50%。对于每一个新插入的节点，都需要调用 randomLevel 生成一个合理的层数。
     * 该 randomLevel 方法会随机生成 1~MAX_LEVEL 之间的数，且 ：
     * 50%的概率返回 1
     * 25%的概率返回 2
     *  12.5%的概率返回 3 ...
     * @return
     */
    private int randomLevel() {
        int level = 1;
        while (Math.random() > PROB && level < MAX_LEVEL) {
            ++level;
        }
        return level;
    }

    public Node get(int value) {
        Node p = h;
        //找到小于value的最大值
        for (int i = levelCount - 1; i >= 0; i--) {
            while (p.forwards[i] != null && p.forwards[i].data < value) {
                p = p.forwards[i];
            }
        }
        //如果p的前驱节点等于value则直接返回
        if (p.forwards[0] != null && p.forwards[0].data == value) {
            return p.forwards[0];
        }

        return null;
    }

    /**
     * 删除
     *
     * @param value
     */
    public void delete(int value) {
        Node p = h;
        //找到各级节点小于value的最大值
        Node[] updateArr = new Node[levelCount];
        for (int i = levelCount - 1; i >= 0; i--) {
            while (p.forwards[i] != null && p.forwards[i].data < value) {
                p = p.forwards[i];
            }
            updateArr[i] = p;
        }
        //查看原始层节点前驱是否等于value，若等于则说明存在要删除的值
        if (p.forwards[0] != null && p.forwards[0].data == value) {
            //从最高级索引开始查看其前驱是否等于value，若等于则将当前节点指向value节点的后继节点
            for (int i = levelCount - 1; i >= 0; i--) {
                if (updateArr[i].forwards[i] != null && updateArr[i].forwards[i].data == value) {
                    updateArr[i].forwards[i] = updateArr[i].forwards[i].forwards[i];
                }
            }
        }

        //从最高级开始查看是否有一级索引为空，若为空则层级减1
        while (levelCount > 1 && h.forwards[levelCount - 1] == null) {
            levelCount--;
        }

    }

    public void printAll() {
        Node p = h;
        //基于最底层的非索引层进行遍历，只要后继节点不为空，则速速出当前节点，并移动到后继节点
        while (p.forwards[0] != null) {
            System.out.println(p.forwards[0]);
            p = p.forwards[0];
        }

    }
    public static void main(String[] args) {
        SkipList skipList = new SkipList();
        for (int i = 0; i < 24; i++) {
            skipList.add(i);
        }

        System.out.println("**********输出添加结果**********");
        skipList.printAll();

        SkipList.Node node = skipList.get(22);
        System.out.println("**********查询结果:" + node+" **********");

        skipList.delete(22);
        System.out.println("**********删除结果**********");
        skipList.printAll();


    }


}
