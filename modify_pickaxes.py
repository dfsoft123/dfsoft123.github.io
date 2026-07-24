import re

file_path = r'c:\Users\ALIENWARE\Documents\trae_projects\cqndgz\Draw your pickaxe.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

image_mapping = {
    'glass': '智谱清言_2026-07-24.png',
    'foam': '智谱清言_2026-07-24 (1).png',
    'plastic': '智谱清言_2026-07-24 (2).png',
    'normal': '智谱清言_2026-07-24 (3).png',
    'extraordinary': '智谱清言_2026-07-24 (4).png',
}

for key, image_file in image_mapping.items():
    pattern = r"(" + re.escape(key) + r":\s*\{[^{}]*)img:'[^']*'"
    replacement = r"\1img:'" + image_file + "'"
    content = re.sub(pattern, replacement, content)

content = re.sub(
    r"(extraordinary:\s*\{[^{}]*)usage:\d+\.\d+,",
    r"\1usage:0.25,",
    content
)

content = re.sub(
    r"(extraordinary:\s*\{[^{}]*)gold:\d+\.?\d*,",
    r"\1gold:10,",
    content
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("修改完成！")