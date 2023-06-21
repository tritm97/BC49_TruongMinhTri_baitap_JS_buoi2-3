// Bài 1: Tính tiền lương nhân viên

document.getElementById('tinhLuong').onclick = function () {
    var luongMotNgay = document.getElementById('luongMotNgay').value * 1;
    var soNgayLam = document.getElementById('soNgayLam').value * 1;

    //trường hợp lương 1 ngày >= 0 và số ngày làm >= 0
    if (luongMotNgay >= 0 && soNgayLam >= 0) {
        var tienLuongTinhDuoc = luongMotNgay * soNgayLam;
        document.getElementById('tienLuong').innerHTML = `Lương của bạn là ${tienLuongTinhDuoc} VNĐ`;
    }

    //trường hợp lương 1 ngày < 0 hoặc số ngày làm < 0
    if (luongMotNgay < 0 || soNgayLam < 0) {
        alert('Kiểm tra kỹ lại đi bạn ơi, bạn nhập sai rồi đấy..!');
    }
}

// Bài 2: Tính giá trị trung bình

document.getElementById('tinhTrungBinh').onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').value * 1;
    var soThuHai = document.getElementById('soThuHai').value * 1;
    var soThuBa = document.getElementById('soThuBa').value * 1;
    var soThuTu = document.getElementById('soThuTu').value * 1;
    var soThuNam = document.getElementById('soThuNam').value * 1;

    var giaTriTB = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    document.getElementById('giaTriTrungBinh').innerHTML = `Giá trị trung bình là ${giaTriTB}`;
}

// Bài 3: Quy đổi tiền USD sang VNĐ

const giaTriUSD = 23500
document.getElementById('tinhTien').onclick = function () {
    var soTienUSD = document.getElementById('soTienUSD').value * 1;

    var soTienVND = soTienUSD * giaTriUSD;
    //trường hợp số tiền usd cần quy đổi >= 0
    if (soTienUSD >= 0) {
        document.getElementById('tienVND').innerHTML = `${new Intl.NumberFormat().format(soTienUSD)} USD sẽ tương đương với ${new Intl.NumberFormat('vn-VN').format(soTienVND)} VNĐ`;
    }
    //trường hợp số tiền được nhập vào < 0
    if (soTienUSD < 0) {
        alert('Bạn đang gặp vấn đề về tài chính đúng không?? :(');
    }
}

// Bài 4: Tính chu vi, diện tích hình chữ nhật

document.getElementById('tinhToan').onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    //trường hợp chiều dài < 0 hoặc chiều rộng < 0
    if (chieuDai < 0 || chieuRong < 0) {
        alert('Hình chữ nhật không thể có cạnh âm được bạn nhé..!')
    }
    //trường hợp chiều dài = 0 hoặc chiều rộng = 0
    if (chieuDai == 0 || chieuRong == 0) {
        alert('Hình chữ nhật của bạn to quá, mình tìm không ra luôn :v')
    }
    //trường hợp chiều dài = chiều rộng
    if (chieuDai == chieuRong && chieuDai != 0 && chieuRong != 0) {
        document.getElementById('chuVi').innerHTML = `Chu vi là ${chuVi}`;
        document.getElementById('dienTich').innerHTML = `Diện tích là ${dienTich}`;
        alert('Bạn vừa nhập vào kích thước của một hình vuông rồi, nhưng không sao, bạn vẫn sẽ nhận được thông số chu vi và diện tích =)))')
    }
    //trường hợp chiều dài > 0 và chiều rộng > 0
    if (chieuDai > 0 && chieuRong > 0) {
        document.getElementById('chuVi').innerHTML = `Chu vi là ${chuVi}`;
        document.getElementById('dienTich').innerHTML = `Diện tích là ${dienTich}`;
    }
}