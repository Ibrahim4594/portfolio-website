from PIL import Image, ImageDraw, ImageFont
import os

# Create image
width, height = 1200, 630
img = Image.new('RGB', (width, height), color='#000000')
draw = ImageDraw.Draw(img)

# Draw grid background
for i in range(0, width, 40):
    draw.line([(i, 0), (i, height)], fill=(0, 255, 0, 25), width=1)
for i in range(0, height, 40):
    draw.line([(0, i), (width, i)], fill=(0, 255, 0, 25), width=1)

# Draw document icon
draw.rectangle([100, 150, 400, 500], outline='#00ff00', width=4)
for i in range(5):
    draw.line([(130, 200 + i*50), (370, 200 + i*50)], fill='#00ff00', width=2)

# Draw AI brain circle
draw.ellipse([730, 195, 970, 435], outline='#00ff00', width=4)

# Draw neural network nodes
points = [(750, 250), (950, 250), (750, 380), (950, 380)]
for point in points:
    draw.ellipse([point[0]-8, point[1]-8, point[0]+8, point[1]+8], fill='#00ff00', outline='#00ff00')
    draw.line([point, (850, 315)], fill=(0, 255, 0, 80), width=2)

# Center node
draw.ellipse([835, 300, 865, 330], fill='#00ff00')

# Add text (simplified without custom fonts)
try:
    font_large = ImageFont.truetype("C:\Windows\Fonts\consola.ttf", 48)
    font_medium = ImageFont.truetype("C:\Windows\Fonts\consola.ttf", 28)
    font_small = ImageFont.truetype("C:\Windows\Fonts\consola.ttf", 24)
except:
    font_large = ImageFont.load_default()
    font_medium = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Title
draw.text((600, 60), "INVOICE PROCESSING", fill='#00ff00', font=font_large, anchor="mt")
draw.text((600, 110), "SPECIALIST AGENT", fill='#00ff00', font=font_large, anchor="mt")

# Subtitle
draw.text((600, 540), "AI-Powered Autonomous Automation", fill='#ffffff', font=font_medium, anchor="mt")

# Stats
draw.text((600, 590), "96% Time Reduction | $483K+ Savings", fill='#00ff00', font=font_small, anchor="mt")

# Save
img.save('invoice-project.jpg', 'JPEG', quality=95)
print("Image created: invoice-project.jpg")
