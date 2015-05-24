#include <bits/stdc++.h>
using namespace std;

class stack{

};

int *a = new int [1];
int size=1, top=-1;

void resize()
{
    size *= 2;
    int *b = new int [size];
    for(int i=0; i<=top; i++)
        b[i] = a[i];
    delete []a;
    a = b;
}

void push(int val)
{
    if(top+1==size)
        resize();
    top++;
    a[top] = val;
}
void pop()
{
    if(top<0)
        cout << "Can not pop, stack empty!" << endl;
    else
        top--;
}
void print()
{
    cout << "Current stack: ";
    for(int i=0; i<=top; i++)
        cout << a[i] << " ";
    cout << endl;
}

int main()
{
    push(5);
    print();
    push(5);
    print();
    push(5);
    print();
    push(5);
    print();


    return 0;
}
