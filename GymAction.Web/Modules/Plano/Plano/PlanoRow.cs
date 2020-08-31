
namespace GymAction.Plano.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Plano"), TableName("[dbo].[PLANO]")]
    [DisplayName("Planos"), InstanceName("Plano")]
    [ReadPermission("Plano:General")]
    [ModifyPermission("Plano:General")]
    [LookupScript("Plano.Plano")]
    public sealed class PlanoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cod Plano"), Column("COD_PLANO"), Identity, Visible(false)]
        public Int32? CodPlano
        {
            get { return Fields.CodPlano[this]; }
            set { Fields.CodPlano[this] = value; }
        }

        [DisplayName("Nome"), Column("DES_NOME"), Size(100), NotNull, QuickSearch]
        public String DesNome
        {
            get { return Fields.DesNome[this]; }
            set { Fields.DesNome[this] = value; }
        }

        [DisplayName("Tipo"), Column("IDF_TIPO"), NotNull]
        public Int32? IdfTipo
        {
            get { return Fields.IdfTipo[this]; }
            set { Fields.IdfTipo[this] = value; }
        }

        [DisplayName("Ativo"), Column("IDF_AIVO"), NotNull, DefaultValue(true)]
        public Boolean? IdfAivo
        {
            get { return Fields.IdfAivo[this]; }
            set { Fields.IdfAivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodPlano; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PlanoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodPlano;
            public StringField DesNome;
            public Int32Field IdfTipo;
            public BooleanField IdfAivo;
        }
    }
}
