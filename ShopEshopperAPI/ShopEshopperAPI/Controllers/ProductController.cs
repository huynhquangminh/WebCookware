using BaseApplication;
using BusinessLogicInterface;
using BusinessLogicInterface.Requests;
using BusinessLogicInterface.Response;
using System.Web.Http;

namespace ShopEshopperAPI.Controllers
{
    public class ProductController : ApiController
    {
        private readonly IProductBusinessLogic _businessLogic;

        public ProductController(IProductBusinessLogic businessLogic)
        {
            _businessLogic = businessLogic;
        }
            
        /// <summary>
        /// GetProductNew
        /// </summary>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult GetProductIndex()
        {
            var result = _businessLogic.GetListProductIndex();
            return new ActionResult<GetProductIndexResponse>(result.Result, Request);
        }


        /// <summary>
        /// GetProductDetail
        /// </summary>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult GetProductDetail(ProductDetailRequest RequestData)
        {
            var result = _businessLogic.GetProductDetailByID(RequestData);
            return new ActionResult<GetProductDetailResponse>(result.Result, Request);
        }

        /// <summary>
        /// GetProductByCategory
        /// </summary>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult GetProductByCategory(GetProductByCategoryRequest RequestData)
        {
            var result = _businessLogic.GetProductByCategory(RequestData);
            return new ActionResult<GetProductAllResponse>(result.Result, Request);
        }

        /// <summary>
        /// GetProductAll
        /// </summary>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult GetProductAll(GetProductAllRequest RequestData)
        {
            var result = _businessLogic.GetProductAll(RequestData);
            return new ActionResult<GetProductAllResponse>(result.Result, Request);
        }

        /// <summary>
        /// FindProduct
        /// </summary>
        /// <returns>IHttpActionResult</returns>
        [HttpPost]
        public IHttpActionResult FindProduct(FindProductRequest RequestData)
        {
            var result = _businessLogic.FindProductByKey(RequestData);
            return new ActionResult<FindProductResponse>(result.Result, Request);
        }
    }
}