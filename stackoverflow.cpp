#include <bits/stdc++.h>
using namespace std;

struct stck{
    int top, size=10005;
    int *a = new int [10005];
};

struct stck s[10005];
int xx;

void resize(int idx)
{
    s[idx].size *= 5;
    int *b = new int [s[idx].size];
    for(int i=0; i<s[idx].top; i++)
        b[i] = s[idx].a[i];
    delete []s[idx].a;
    s[idx].a = b;
}

void init(int n)
{
    for(int i=1; i<=n; i++)
        s[i].top = 0;
}
void push(int idx, int x)
{
    if(s[idx].top==s[idx].size)
        resize(idx);
    s[idx].a[s[idx].top] = x;
    s[idx].top++;
}
void pop(int idx)
{
    if(s[idx].top>0)
        s[idx].top--;
}
void put(int idx, int idx2)
{
    xx = s[idx2].top;
    for(int i=0; i<xx; i++)
        push(idx,s[idx2].a[i]);
    s[idx2].top = 0;
    if( s[idx2].size>10005 )
    {
        s[idx2].size = 10005;
        delete []s[idx2].a;
        int *b = new int [s[idx2].size];
        s[idx2].a = b;
    }
}
int print(int idx)
{
    xx = s[idx].top;
    if(xx>0)
        return s[idx].a[xx-1];
    else
        return -1;
}

int main()
{
    ios_base::sync_with_stdio(0);
    freopen("in.txt","r",stdin);
    freopen("out.txt","w",stdout);
    int cases,caseno=0,x,n,q,idx;
    char s[10];

    cin >> cases;

    while(cases--)
    {
        cout << "Case " << ++caseno << ":\n";
        cin >> n >> q;
        init(n);
        while(q--)
        {
            cin >> s;
            if(s[2]=='s') // push
            {
                cin >> idx >> x;
                push(idx,x);
            }
            else if(s[0]=='p' && s[1]=='o') // pop
            {
                cin >> idx;
                pop(idx);
            }
            else if(s[2]=='t') // put
            {
                cin >> idx >> x;
                if(idx!=x)
                    put(idx,x);
            }
            else if(s[0]=='t') // top
            {
                cin >> idx;
                x = print(idx);
                if(x>0)
                    cout << x;
                else
                    cout << "Empty!";
                cout << "\n";
            }
        }
    }

    return 0;
}
