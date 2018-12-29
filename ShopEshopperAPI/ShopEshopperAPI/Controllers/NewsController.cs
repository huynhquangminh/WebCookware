using BaseApplication;
using BusinessLogicInterface;
using BusinessLogicInterface.Requests;
using BusinessLogicInterface.Response;
using System.Web.Http;

namespace ShopEshopperAPI.Controllers
{
    public class NewsController : ApiController
    {
        private readonly INewsBusinessLogic _businessLogic;

        public NewsController(INewsBusinessLogic businessLogic)
        {
            _businessLogic = businessLogic;
        }

        /// <summary>
        /// GetNewsAll
        /// </summary>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult GetNewsAll()
        {
            var result = _businessLogic.GetNewsAll();
            return new ActionResult<GetNewsAllResponse>(result.Result, Request);
        }


        /// <summary>
        /// GetListNewsAll
        /// </summary>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult GetListNewsAll()
        {
            var result = _businessLogic.GetListNewsAll();
            return new ActionResult<GetListNewsAllResponse>(result.Result, Request);
        }

        /// <summary>
        /// GetNewsDetail
        /// </summary>
        /// <param name="RequestData">GetNewsDetailRequest</param>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult GetNewsDetail(GetNewsDetailRequest RequestData)
        {
            var result = _businessLogic.GetNewsDetail(RequestData);
            return new ActionResult<GetNewsDetailResponse>(result.Result, Request);
        }

        /// <summary>
        /// GetNewsDetail
        /// </summary>
        /// <param name="RequestData">GetNewsDetailRequest</param>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult AddNews(Add_NewsRequest RequestData)
        {
            var result = _businessLogic.Add_News(RequestData);
            return new ActionResult<bool>(result.Result, Request);
        }

        /// <summary>
        /// GetNewsDetail
        /// </summary>
        /// <param name="RequestData">GetNewsDetailRequest</param>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult EditNews(Edit_NewsRequest RequestData)
        {
            var result = _businessLogic.Edit_News(RequestData);
            return new ActionResult<bool>(result.Result, Request);
        }

        /// <summary>
        /// GetNewsDetail
        /// </summary>
        /// <param name="RequestData">GetNewsDetailRequest</param>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult DeleteNews(Delete_NewsRequest RequestData)
        {
            var result = _businessLogic.Delete_News(RequestData);
            return new ActionResult<bool>(result.Result, Request);
        }
    }
}