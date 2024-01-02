using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoListApp.Models
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Describtion { get; set; }
        public string Describtion2 { get; set; }
        public bool IsDone { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}