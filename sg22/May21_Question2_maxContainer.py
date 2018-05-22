import sys



def maxContainer(height):
    Result=[]

    for i in range(0,len(height)):

        for j in range(i+1,len(height)):
            area=(j-i)*min(height[i],height[j])
            Result.append(area)

    return Result

if __name__ == '__main__':
    height=[1,1]
    Result=maxContainer(height)
    print max(Result)
