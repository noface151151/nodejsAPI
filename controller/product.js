var db = require("../core/db");
var httpms = require("../core/httpms")
var util = require('util')
var utf8 = require('utf8')
exports.getlist = function (req, res) {
    db.executeSql("SELECT * FROM SanPham", function (data, err) {
        if (err) {
            httpms.show500(req, res, err);

        }
        else {
            httpms.showJson(req, res, data);
        }
    })
}

exports.get = function (req, res, id) {
    db.executeSql("SELECT * FROM SanPham WHERE Id=" + id, function (data, err) {
        if (err) {

            httpms.show404(req, res);

        }
        else {
           
            httpms.showJson(req, res, data);

        }
    })
}
exports.getByCate = function (req, res, id) {
    var querry = "SELECT [t1].[Id], [t1].[TenSanPham], [t1].[Gia], [t1].[LuotXem], [t1].[LuotMua], [t1].[HinhAnh], [t1].[MoTa], [t1].[SoLuong]" +
        "FROM [SanPhamTheLoai] AS [t0]" +
        "INNER JOIN [SanPham] AS [t1] ON [t1].[Id] = [t0].[Id_SanPham]" +
        "WHERE [t0].[Id_TheLoai] = " + id;
    db.executeSql(querry, function (data, err) {
        if (err) {

            httpms.show404(req, res);

        }
        else {
            httpms.showJson(req, res, data);

        }
    })
}
exports.getBySubCate = function (req, res, id) {
    var querry = "SELECT [t1].[Id], [t1].[TenSanPham], [t1].[Gia], [t1].[LuotXem], [t1].[LuotMua], [t1].[HinhAnh], [t1].[MoTa], [t1].[SoLuong]" +
        "FROM [SanPhamSubTheLoai] AS [t0]" +
        "INNER JOIN [SanPham] AS [t1] ON [t1].[Id] = [t0].[Id_SanPham]" +
        "WHERE [t0].[Id_SubTheLoai] = " + id;
    db.executeSql(querry, function (data, err) {
        if (err) {

            httpms.show404(req, res);

        }
        else {
            httpms.showJson(req, res, data);

        }
    })
}
exports.add = function (req, res, reqBody) {
    try {
        if (!reqBody) throw new Error("Input not valid!");
        var data = reqBody;

        if (data) {
        
            var querry = 'INSERT INTO SanPham (TenSanPham,Gia,HinhAnh,MoTa,SoLuong) VALUES';
            querry += util.format("(N'%s',%d,N'%s',N'%s',%d)", data.TenSanPham, data.Gia, data.HinhAnh, data.MoTa, data.SoLuong);
            console.log(querry);
            db.executeSql(querry, function (data, err) {
                if (err) {

                    httpms.show500(req, res, err);

                }
                else {
                    httpms.show200(req, res);

                }
            })
        }
        else {
            throw new Error("Input not valid!");
        }

    }
    catch (ex) {
        httpms.show500(req, res, ex);
    }
}
exports.update = function (req, res, reqBody) {

}