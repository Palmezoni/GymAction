
namespace GymAction.Aula.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Aula"), TableName("[dbo].[AULA]")]
    [DisplayName("Aulas"), InstanceName("Aula")]
    [ReadPermission("Aula:General")]
    [ModifyPermission("Aula:General")]
    [LookupScript("Aula.Aula")]
    public sealed class AulaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cod Aula"), Column("COD_AULA"), Identity, AlignCenter]
        public Int32? CodAula
        {
            get { return Fields.CodAula[this]; }
            set { Fields.CodAula[this] = value; }
        }

        [DisplayName("Des Aula"), Column("DES_AULA"), Size(100), NotNull, QuickSearch]
        public String DesAula
        {
            get { return Fields.DesAula[this]; }
            set { Fields.DesAula[this] = value; }
        }

        [DisplayName("Idf Tipo Atividade"), Column("IDF_TIPO_ATIVIDADE"), NotNull]
        public Int32? IdfTipoAtividade
        {
            get { return Fields.IdfTipoAtividade[this]; }
            set { Fields.IdfTipoAtividade[this] = value; }
        }

        [DisplayName("Idf Ativo"), Column("IDF_ATIVO"), NotNull, DefaultValue("1")]
        public Boolean? IdfAtivo
        {
            get { return Fields.IdfAtivo[this]; }
            set { Fields.IdfAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodAula; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesAula; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AulaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodAula;
            public StringField DesAula;
            public Int32Field IdfTipoAtividade;
            public BooleanField IdfAtivo;
        }
    }
}
