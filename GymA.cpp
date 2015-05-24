#include <iostream>
#include <cstdio>
#include <algorithm>
using namespace std;

int main()
{
    freopen("ate.in", "r", stdin);
    freopen("ate.out", "w", stdout);
    int n;

    scanf("%d", &n);
    printf("%d\n", max(199-n,0));

    return 0;
}
