import sys


# defin

class Node(object):

    def __init__(self,data=None,next_node=None):
        self.data=data
        self.next_node=next_node


class LinkedList(object):

    def __init__(self,headnode=None):
        self.headnode=headnode


def sum(List1,List2):
    head1=List1.headnode
    head2=List2.headnode
    current1=head1
    current2=head2

    L_new=LinkedList()

    if head1 is None:
        L_new=List2
        return L_new
    if head2 is None:
        L_new=List1
        return L_new

    else:

        new_data=head1.data+head2.data
        if new_data>=10:

            new_node_1=Node(new_data-10)
            new_data_2=Node(1)

            L_new.headnode=new_node_1
            L_new.headnode.next_node=new_data_2
            current=new_data_2
            current1=current1.next_node
            current2=current2.next_node

        else:

            new_node=Node(new_data)
            L_new.headnode=new_node
            current=new_node
            current1 = current1.next_node
            current2 = current2.next_node

    while current1 is not None and current2 is not None:


        new_data = current1.data + current2.data
        if new_data >= 10:

            new_node_1 = Node(new_data - 10)
            new_data_2 = Node(1)

            current.next_node = new_node_1
            new_node_1.next_node = new_data_2
            current = new_data_2
            current1 = current1.next_node
            current2 = current2.next_node

        else:

            new_node = Node(new_data)
            current.next_node = new_node
            current=new_node
            current1 = current1.next_node
            current2 = current2.next_node
    if current1 is None:
        current.next_node=current2
        return L_new
    elif current2 is None:
        current.next_node=current1
        return L_new
    else:
        return L_new


if __name__ == '__main__':
    n1=Node(4)
    n2=Node(3)
    n3 = Node(2)
    n4 = Node(4)
    n5 = Node(1)
    n6 = Node(9)
    n1.next_node=n2
    n2.next_node=n3
    List1=LinkedList(n1)
    current=List1.headnode
    while current is not None:
        print current.data
        current=current.next_node

    n4.next_node=n5
    n5.next_node=n6
    List2 = LinkedList(n4)
    current = List2.headnode
    print "\n"
    while current is not None:
        print current.data
        current = current.next_node

    result=sum(List1,List2)
    current=result.headnode
    print "\n"
    while current is not None:
        print current.data
        current=current.next_node




