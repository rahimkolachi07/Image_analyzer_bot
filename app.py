import gradio as gr
import webbrowser
import cv2
from gemini.geminivision import model
import time 
import PIL.Image

def mod(text,img):
    cv2.imwrite("input_img.jpg",img)
    time.sleep(2)
    img = PIL.Image.open('input_img.jpg')
    text=model(text,img)
    return text
app=gr.Interface(fn=mod,inputs=["text","image"],outputs="text",title="THIS IS IMAGE DESCRIBER",theme=gr.themes.Soft())
url=app.launch(share=True,inbrowser=True,debug=True,auth=("heckto","byte"))