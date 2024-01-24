import cv2 
import os
files = os.listdir()[1:]
img = cv2.imread(files[0],0)
cv2.imwrite("Gray_"+files[0],img)