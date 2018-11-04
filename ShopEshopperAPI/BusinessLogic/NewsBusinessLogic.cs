using AutoMapper;
using BaseApplication;
using BusinessLogicInterface;
using BusinessLogicInterface.Dtos;
using BusinessLogicInterface.Requests;
using BusinessLogicInterface.Response;
using DataAcceessInterface;
using DataAcceessInterface.Parameter;
using EntityData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
   public class NewsBusinessLogic : BaseBusinessLogic, INewsBusinessLogic
    {
        private readonly INewsDataAccess _dataAccess;

        public NewsBusinessLogic(INewsDataAccess dataAccess)
        {
            _dataAccess = dataAccess;
            ConfigAutoMapper();
        }

        /// <summary>
        /// ConfigAutoMapper
        /// </summary>
        public override void ConfigAutoMapper()
        {
            configMap = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<GETNEWS_BY_DATE_Result, GetListNewsDto>();
                cfg.CreateMap<GETNEWS_BY_VIEW_Result, GetListNewsDto>();
                cfg.CreateMap<GETNEWSDETAIL_Result, GetNewsDetailDto>();
                
            });
            mapper = configMap.CreateMapper();
        }

        /// <summary>
        /// GetListNewsAll
        /// </summary>
        /// <returns>GetListNewsAllResponse</returns>
        public async  Task<GetListNewsAllResponse> GetListNewsAll()
        {
            var response = new GetListNewsAllResponse();
            try
            {
                var resultByDate = _dataAccess.GetListNewsByDate();
                var resultByView = _dataAccess.GetListNewsByView();
                if (resultByDate != null && resultByView != null)
                {
                    response.listNewsByDate = MapList<GETNEWS_BY_DATE_Result, GetListNewsDto>(resultByDate.ToList());
                    response.listNewsByView = MapList<GETNEWS_BY_VIEW_Result, GetListNewsDto>(resultByView.ToList());
                    response.Success = true;
                }

            }
            catch (Exception )
            {
                response.Success = false;
            }
            return await Task.FromResult(response);
        }

        /// <summary>
        /// GetNewsDetail
        /// </summary>
        /// <param name="request">GetNewsDetailRequest</param>
        /// <returns>GetNewsDetailResponse</returns>
        public async Task<GetNewsDetailResponse> GetNewsDetail(GetNewsDetailRequest request)
        {
            var response = new GetNewsDetailResponse();
            try
            {
                var param = new GetNewsDetailParameter
                {
                    id = request.ID
                };
                var result = _dataAccess.GetNewsDetail(param);
             
                if (result != null)
                {
                    response.NewsDetail = mapper.Map<GETNEWSDETAIL_Result, GetNewsDetailDto>(result);
                    
                    response.Success = true;
                }

            }
            catch (Exception )
            {
                response.Success = false;
            }
            return await Task.FromResult(response);
        }

        /// <summary>
        /// Add_News
        /// </summary>
        /// <param name="request">Add_NewsRequest</param>
        /// <returns></returns>
      public async  Task<bool> Add_News(Add_NewsRequest request)
        {
            bool result = false;
            try
            {
                var param = new AddNewsParameter()
                {
                    NameNews = request.NameNews,
                    IDCreater = request.IDCreater,
                    Date = DateTime.Now,
                    ImageNews = request.ImageNews,
                    ImageNewDetail = request.ImageNewDetail,
                    ViewMax = request.ViewMax,
                    DescriptionNews= request.DescriptionNews,
                };
                _dataAccess.Add_News(param);
                result = true;
                return await Task.FromResult(result);

            }
            catch (Exception )
            {
                result = false;
                return await Task.FromResult(result);
            }
            
        }

        /// <summary>
        /// Edit_News
        /// </summary>
        /// <param name="request">Edit_NewsRequest</param>
        /// <returns></returns>
       public async Task<bool> Edit_News(Edit_NewsRequest request)
        {
            bool result = false;
            try
            {
                var param = new EditNewsParameter()
                {
                    ID = request.ID,
                    NameNews = request.NameNews,
                    IDCreater = request.IDCreater,
                    Date = DateTime.Now,
                    ImageNews = request.ImageNews,
                    ImageNewDetail = request.ImageNewDetail,
                    ViewMax = request.ViewMax,
                    DescriptionNews = request.DescriptionNews,
                };
                _dataAccess.Edit_News(param);
                result = true;
                return await Task.FromResult(result);

            }
            catch (Exception )
            {
                result = false;
                return await Task.FromResult(result);
            }
           
        }

        /// <summary>
        /// Delete_News
        /// </summary>
        /// <param name="request">Delete_NewsRequest</param>
        /// <returns></returns>
       public async Task<bool> Delete_News(Delete_NewsRequest request)
        {
            bool result = false;
            try
            {
                var param = new DeleteNewsParameter()
                {
                    id = request.id,
                   
                };
                _dataAccess.Delete_News(param);
                result = true;
                return await Task.FromResult(result);

            }
            catch (Exception )
            {
                result = false;
                return await Task.FromResult(result);
            }
            
        }

    }
}
