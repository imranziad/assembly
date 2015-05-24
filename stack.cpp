#include <bits/stdc++.h>
using namespace std;

class Stack{
    int *a = new int [1];
    int size,top;
public:
    Stack();
    void resize();
    void push(int val);
    void pop();
    void print();
};
Stack::Stack()
{
    size = 1;
    top = -1;
}
void Stack::resize()
{
    size *= 2;
    int *b = new int [size];
    for(int i=0; i<=top; i++)
        b[i] = a[i];
    delete []a;
    a = b;
}
void Stack::push(int val)
{
    if(top+1==size)
        resize();
    top++;
    a[top] = val;
}
void Stack::pop()
{
    if(top<0)
        cout << "Can not pop, stack empty!" << endl;
    else
        top--;
}
void Stack::print()
{
    cout << "Current stack: ";
    for(int i=0; i<=top; i++)
        cout << a[i] << " ";
    cout << endl;
}

int main(){
    Stack s;

    s.push(5);
    s.print();
    s.push(7);
    s.print();
    s.push(4);
    s.print();
    s.pop();
    s.print();
    s.push(2);
    s.print();
    s.push(6);
    s.print();

    return 0;
}
