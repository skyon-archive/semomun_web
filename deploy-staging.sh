root_dir=~/Documents/programming/semomun/semomun_web
cd $root_dir && \
npm run build && \
cd build && \
cp index.html 200.html && \
echo https://semomun.surge.sh > CNAME && \
surge . && \
cd $root_dir
