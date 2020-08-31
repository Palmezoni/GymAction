
namespace GymAction.Instrutor.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Instrutor"), TableName("[dbo].[INSTRUTOR]")]
    [DisplayName("Instrutores"), InstanceName("Instrutor")]
    [ReadPermission("Instrutor:General")]
    [ModifyPermission("Instrutor:General")]
    [LookupScript("Instrutor.Instrutor")]
    public sealed class InstrutorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cod Instrutor"), Column("COD_INSTRUTOR"), Identity, Visible(false)]
        public Int32? CodInstrutor
        {
            get { return Fields.CodInstrutor[this]; }
            set { Fields.CodInstrutor[this] = value; }
        }

        [DisplayName("Nome"), Column("DES_NOME"), Size(100), NotNull, QuickSearch]
        public String DesNome
        {
            get { return Fields.DesNome[this]; }
            set { Fields.DesNome[this] = value; }
        }

        [DisplayName("RG"), Column("DES_RG"), Size(20), NotNull, QuickSearch]
        public String DesRg
        {
            get { return Fields.DesRg[this]; }
            set { Fields.DesRg[this] = value; }
        }

        [DisplayName("CPF"), Column("DES_CPF"), Size(14), NotNull, QuickSearch]
        public String DesCpf
        {
            get { return Fields.DesCpf[this]; }
            set { Fields.DesCpf[this] = value; }
        }

        [DisplayName("Tipo Atividade"), Column("IDF_TIPO_ATIVIDADE"), NotNull]
        public Int32? IdfTipoAtividade
        {
            get { return Fields.IdfTipoAtividade[this]; }
            set { Fields.IdfTipoAtividade[this] = value; }
        }

        [DisplayName("Ativo"), Column("IDF_ATIVO"), NotNull, DefaultValue(true)]
        public Boolean? IdfAtivo
        {
            get { return Fields.IdfAtivo[this]; }
            set { Fields.IdfAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodInstrutor; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesNome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InstrutorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodInstrutor;
            public StringField DesNome;
            public StringField DesRg;
            public StringField DesCpf;
            public Int32Field IdfTipoAtividade;
            public BooleanField IdfAtivo;
        }
    }
}
