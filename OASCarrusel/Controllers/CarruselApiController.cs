using DotNetNuke.Web.Api;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using DotNetNuke.Web.Api;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.Http.Routing.Constraints;
using DotNetNuke.Common.Utilities;


namespace OASDnnModules.OASCarrusel.Controllers
{
    public class CarruselApiController : DnnApiController
    {
        [HttpGet]
        //[AllowAnonymous]
        public HttpResponseMessage HelloWorld()
        {
            string jsonFile = "hola mundo";
            return Request.CreateResponse(System.Net.HttpStatusCode.OK, jsonFile);
        }

        [HttpPost]
        //[AllowAnonymous]
        public HttpResponseMessage CardViewSetting([FromBody] CardsViewSettingRequest data)
        {
            if (data.IsSaving)
            {
                var saveRequest = new CardsViewSettingSaveRequest
                {
                    Filename = data.Filename,
                    FileContent = data.FileContent,
                    IsSaving = true
                };
                return SaveFileViewSetting(saveRequest);
            }

            return GetFileViewSetting(data);
        }

        public HttpResponseMessage GetFileViewSetting(CardsViewSettingRequest data)
        {
            string fileJsonContent = "";
            string sCurrentDirectory = AppDomain.CurrentDomain.BaseDirectory;
            string filePath = @"DesktopModules\OASCarrusel\viewsettings\" + data.Filename + ".json";
            string info = $"{filePath}"; //System.IO.Path.Combine(sCurrentDirectory, "DesktopModules\\OASCarrusel\\viewsettings\\cardviewsetting1.json");
            string jsonFile = System.IO.File.Exists($"{sCurrentDirectory}{filePath}") ? "el archivo exite" : "el archivo no existe";

            if (System.IO.File.Exists($"{sCurrentDirectory}{filePath}"))
            {
                fileJsonContent = File.ReadAllText($"{sCurrentDirectory}{filePath}");
            }
            else
            {
                return Request.CreateResponse(System.Net.HttpStatusCode.OK, "el archivo no existe");
            }


            var jsonObject = new
            {
                filePathFull = $"{sCurrentDirectory}{info}",
                fileContent = fileJsonContent

            };
            return Request.CreateResponse(System.Net.HttpStatusCode.OK, jsonObject);
        }

        public HttpResponseMessage SaveFileViewSetting(CardsViewSettingSaveRequest data)
        {
            string fileJsonContent = data.FileContent;
            string fileName = data.Filename;
            string sCurrentDirectory = AppDomain.CurrentDomain.BaseDirectory;
            string filePath = @"DesktopModules\OASCarrusel\viewsettings\" + fileName + ".json";
            string info = $"{filePath}";
            try
            {
                File.WriteAllText($"{sCurrentDirectory}{filePath}", fileJsonContent);

                if (!System.IO.File.Exists($"{sCurrentDirectory}{filePath}"))
                {
                    return Request.CreateResponse(System.Net.HttpStatusCode.InternalServerError, new CardsViewGeneralResponse
                    {
                        Message = "el archivo no se pudo guardar",
                        Success = false
                    });
                }

                var jsonObject = new
                {
                    filePathFull = $"{sCurrentDirectory}{info}",
                    fileContent = fileJsonContent

                };
                return Request.CreateResponse(System.Net.HttpStatusCode.OK, new CardsViewGeneralResponse
                {
                    Message = "archivo guardado con exito",
                    Success = true
                });
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(System.Net.HttpStatusCode.OK, new CardsViewGeneralResponse
                {
                    Message = ex.StackTrace,
                    Success = false
                });
            }
        }
    }

    public class CardsViewSettingRequest
    {
        public string Filename { get; set; }
        public string FileContent { get; set; }
        public bool IsSaving { get; set; }
    }

    public class CardsViewSettingSaveRequest
    {
        public string Filename { get; set; }
        public string FileContent { get; set; }
        public bool IsSaving { get; set; }
    }

    public class CardsViewSettingResponse
    {
        public string Filename { get; set; }
        public string FileContent { get; set; }
    }
    public class CardsViewGeneralResponse
    {
        public string Message { get; set; }
        public bool Success { get; set; }
    }
}