﻿using System;

namespace BusinessLogicInterface.Requests
{
    public class Edit_NewsRequest
    {
        public int ID { get; set; }
        public string NameNews { get; set; }
        public int IDCreater { get; set; }
        public DateTime Date { get; set; }
        public string ImageNews { get; set; }
        public string ImageNewDetail { get; set; }
        public int ViewMax { get; set; }
        public string DescriptionNews { get; set; }
    }
}