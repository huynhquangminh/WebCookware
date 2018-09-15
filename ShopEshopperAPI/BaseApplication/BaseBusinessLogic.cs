﻿using AutoMapper;
using System.Collections.Generic;

namespace BaseApplication
{
    public abstract class BaseBusinessLogic
    {
        public BaseBusinessLogic()
        {
        }

        public MapperConfiguration configMap { get; set; }
        public IMapper mapper { get; set; }

        public abstract void ConfigAutoMapper();

        public List<TDestination> MapList<TSource, TDestination>(List<TSource> realObjects)
        {
            List<TDestination> mappedEntities = new List<TDestination>();
            foreach (var currentRealObject in realObjects)
            {
                var result = mapper.Map<TSource, TDestination>(currentRealObject);
                mappedEntities.Add(result);
            }
            return mappedEntities;
        }
    }
}