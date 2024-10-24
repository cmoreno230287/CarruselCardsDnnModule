using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.Http;
using DotNetNuke.Web.Api;
using System.Web.Services.Description;

namespace OASDnnModules.OASCarrusel.Controllers
{
    public class RouteConfig : IServiceRouteMapper
    {
        public void RegisterRoutes(IMapRoute routeManager)
        {
            routeManager.MapHttpRoute("OASCarrusel", "default", "{controller}/{action}", new[] { "OASDnnModules.OASCarrusel", "OASDnnModules.OASCarrusel.Controllers" });
        }
    }
}