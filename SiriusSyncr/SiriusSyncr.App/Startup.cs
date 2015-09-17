using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SiriusSyncr.App.Startup))]
namespace SiriusSyncr.App
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
