
namespace GymAction.AvaliacaoFisica.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("AvaliacaoFisica"), TableName("[dbo].[AVALIACAO_FISICA]")]
    [DisplayName("Avaliações Físicas"), InstanceName("Avaliação Física")]
    [ReadPermission("AvaliacaoFisica:General")]
    [ModifyPermission("AvaliacaoFisica:General")]
    public sealed class AvaliacaoFisicaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cod Avaliacao Fisica"), Column("COD_AVALIACAO_FISICA"), Identity, Visible(false)]
        public Int32? CodAvaliacaoFisica
        {
            get { return Fields.CodAvaliacaoFisica[this]; }
            set { Fields.CodAvaliacaoFisica[this] = value; }
        }

        [DisplayName("Cod Cliente"), Column("COD_CLIENTE"), NotNull, ForeignKey("[dbo].[CLIENTE]", "COD_CLIENTE"), LeftJoin("jCodCliente"), TextualField("CodClienteDesNome")]
        [LookupEditor("Cliente.Cliente")]
        public Int32? CodCliente
        {
            get { return Fields.CodCliente[this]; }
            set { Fields.CodCliente[this] = value; }
        }

        [DisplayName("Cod Fisioterapeuta"), Column("COD_FISIOTERAPEUTA"), NotNull, ForeignKey("[dbo].[FISIOTERAPEUTA]", "COD_FISIOTERAPEUTA"), LeftJoin("jCodFisioterapeuta"), TextualField("CodFisioterapeutaDesNome")]
        [LookupEditor("Fisioterapeuta.Fisioterapeuta")]
        public Int32? CodFisioterapeuta
        {
            get { return Fields.CodFisioterapeuta[this]; }
            set { Fields.CodFisioterapeuta[this] = value; }
        }

        [DisplayName("Anamnese"), Column("DES_ANAMNESE"), Size(2000), NotNull]
        public String DesAnamnese
        {
            get { return Fields.DesAnamnese[this]; }
            set { Fields.DesAnamnese[this] = value; }
        }

        [DisplayName("Exame Dobras"), Column("DES_EXAME_DOBRAS"), Size(2000), NotNull]
        public String DesExameDobras
        {
            get { return Fields.DesExameDobras[this]; }
            set { Fields.DesExameDobras[this] = value; }
        }

        [DisplayName("Exame Ergométrico"), Column("DES_EXAME_ERGOMETRICO"), Size(2000), NotNull]
        public String DesExameErgometrico
        {
            get { return Fields.DesExameErgometrico[this]; }
            set { Fields.DesExameErgometrico[this] = value; }
        }

        [DisplayName("Data da Avaliação"), Column("DAT_AVALIACAO"), NotNull]
        public DateTime? DatAvaliacao
        {
            get { return Fields.DatAvaliacao[this]; }
            set { Fields.DatAvaliacao[this] = value; }
        }

        [DisplayName("Biometria"), Expression("jCodCliente.[COD_BIOMETRIA]")]
        public Int32? CodClienteCodBiometria
        {
            get { return Fields.CodClienteCodBiometria[this]; }
            set { Fields.CodClienteCodBiometria[this] = value; }
        }

        [DisplayName("Cliente"), Expression("jCodCliente.[DES_NOME]"), QuickSearch]
        public String CodClienteDesNome
        {
            get { return Fields.CodClienteDesNome[this]; }
            set { Fields.CodClienteDesNome[this] = value; }
        }

        [DisplayName("Cod Cliente Des Rg"), Expression("jCodCliente.[DES_RG]")]
        public String CodClienteDesRg
        {
            get { return Fields.CodClienteDesRg[this]; }
            set { Fields.CodClienteDesRg[this] = value; }
        }

        [DisplayName("Cod Cliente Des Cpf"), Expression("jCodCliente.[DES_CPF]")]
        public String CodClienteDesCpf
        {
            get { return Fields.CodClienteDesCpf[this]; }
            set { Fields.CodClienteDesCpf[this] = value; }
        }

        [DisplayName("Cod Cliente Idf Adimplente"), Expression("jCodCliente.[IDF_ADIMPLENTE]")]
        public Boolean? CodClienteIdfAdimplente
        {
            get { return Fields.CodClienteIdfAdimplente[this]; }
            set { Fields.CodClienteIdfAdimplente[this] = value; }
        }

        [DisplayName("Cod Cliente Idf Ativo"), Expression("jCodCliente.[IDF_ATIVO]")]
        public Boolean? CodClienteIdfAtivo
        {
            get { return Fields.CodClienteIdfAtivo[this]; }
            set { Fields.CodClienteIdfAtivo[this] = value; }
        }

        [DisplayName("Cod Cliente Des Endereco"), Expression("jCodCliente.[DES_ENDERECO]")]
        public String CodClienteDesEndereco
        {
            get { return Fields.CodClienteDesEndereco[this]; }
            set { Fields.CodClienteDesEndereco[this] = value; }
        }

        [DisplayName("Fisioterapeuta"), Expression("jCodFisioterapeuta.[DES_NOME]"), QuickSearch]
        public String CodFisioterapeutaDesNome
        {
            get { return Fields.CodFisioterapeutaDesNome[this]; }
            set { Fields.CodFisioterapeutaDesNome[this] = value; }
        }

        [DisplayName("Cod Fisioterapeuta Idf Ativo"), Expression("jCodFisioterapeuta.[IDF_ATIVO]")]
        public Boolean? CodFisioterapeutaIdfAtivo
        {
            get { return Fields.CodFisioterapeutaIdfAtivo[this]; }
            set { Fields.CodFisioterapeutaIdfAtivo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CodAvaliacaoFisica; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DesAnamnese; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AvaliacaoFisicaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CodAvaliacaoFisica;
            public Int32Field CodCliente;
            public Int32Field CodFisioterapeuta;
            public StringField DesAnamnese;
            public StringField DesExameDobras;
            public StringField DesExameErgometrico;
            public DateTimeField DatAvaliacao;

            public Int32Field CodClienteCodBiometria;
            public StringField CodClienteDesNome;
            public StringField CodClienteDesRg;
            public StringField CodClienteDesCpf;
            public BooleanField CodClienteIdfAdimplente;
            public BooleanField CodClienteIdfAtivo;
            public StringField CodClienteDesEndereco;

            public StringField CodFisioterapeutaDesNome;
            public BooleanField CodFisioterapeutaIdfAtivo;
        }
    }
}
