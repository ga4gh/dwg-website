'use strict';

angular.module('ga4gh')
  .controller('MainCtrl', function ($scope) {

  var image_root = '/assets/images/chairs/';
  $scope.chairs = [
    {
      'name': 'David Haussler',
      'title': 'Data Working Group Co-chair and Co-founder',
      'institute': 'University of California, Santa Cruz',
      'image': image_root + 'david_haussler.jpg',
      'bio': 'Distinguished Professor, Biomolecular Engineering and Director, Center for Biomolecular Science & Engineering, UCSC. Director, UCSC Cancer Genomics Hub. Scientific Co-Director, California Intitute for Quantitative Biosciences (QB3)'
    },
    {
      'name': 'Richard Durbin',
      'title': 'Data Working Group Co-chair and Co-founder',
      'institute': 'Wellcome Trust Sanger Institute',
      'image': image_root + 'richard_durbin.jpg',
      'bio': 'Richard Durbin is a Senior Group Leader and Acting Head of Computational Genomics at the Wellcome Trust Sanger Institute, in Cambridge, England'
    },
    {
      'name': 'Ewan Birney',
      'title': 'FileFormats Task Team Co-chair',
      'institute': 'European Bioinformatics Institute (EBI)',
      'image': image_root + 'ewan_birney.jpg',
      'bio': 'Dr Ewan Birney is Associate Director of the EMBL-European Bioinformatics Institute (EMBL-EBI).'
    },
    {
      'name': 'Gil McVean',
      'title': 'Reference Variation Task Team Co-chair',
      'institute': 'University of Oxford',
      'image': image_root + 'gil_mcvean.jpg',
      'bio': 'Professor of Statistical Genetics, Head of Bioinformatics and Statistical Genetics,  Lecturer in Mathematical Genetics, Group Head / PI and Unit Director Wellcome Trust Centre for Human Genetics'
    },
    {
      'name': 'Benedict Paten',
      'title': 'Reference Variation Task Team Co-chair',
      'institute': 'University of California, Santa Cruz',
      'image': image_root + 'benedict_paten.jpg',
      'bio': 'Benedidict Paten is a Research Scientist University of California, Santa Cruz.'
    },
    {
      'name': 'Helen Parkinson',
      'title': 'Metadata Task Team Co-chair',
      'institute': 'European Bioinformatics Institute (EBI)',
      'image': image_root + 'helen_parkinson.jpg',
      'bio': 'Helen Parkinson leads the Samples, Phenotypes and Ontologies team at the European Bioinformatics Institute (EMBL-EBI)'
    },
     {
      'name': 'Fiona Cunningham',
      'title': 'Variant Annotation Task Team Co-chair' ,
      'institute': 'European Bioinformatics Institute (EBI)',
      'image': image_root + 'fiona_cunningham.jpg',
      'bio': 'Fiona Cunningham is the Variation Annotation Coordinator at the European Bioinformatics Institute (EMBL-EBI). Her work includes projects such as Ensembl, LRG and the GWAS Catalog.'
    }, {
      'name': 'Angel Pizarro',
      'title': 'Reads Task Team Chair' ,
      'institute': 'Amazon Inc.',
      'image': image_root + 'angel_pizarro.jpg',
      'bio': 'Technical Business Development Manager, Genomics and Life Sciences, Scientific Computing, Amazon Web Services.'
    },
  {
      'name': 'Justin Zook',
      'title': 'Benchmarking Task Team Chair',
      'institute': 'National Institute of Standards and Technology (NIST)',
      'image': image_root + 'justin_zook.jpg',
      'bio': 'Justin Zook is a scientist at the National Institute of Standards and Technology developing well-characterized whole genome Reference Materials for benchmarking sequencing and bioinformatics.'
    },
     {
      'name': 'Barbara Wold',
      'title': 'RNAseq Task Team Co-chair',
      'institute': 'Caltech',
      'image': image_root + 'barbara_wold.jpg',
      'bio': 'Barbara Wold is the Bren Professor of Molecular Biology at Caltech.'
    },
     {
      'name': 'Adam Margolin',
      'title': 'Genotype to Phenotype Task Team Chair',
      'institute': 'Oregon Health & Science University (OHSU)',
      'image': image_root + 'adam_margolin.jpg',
      'bio': 'Adam Margolin is the Director of Computational Biology and an Associate Professor at Oregon Health & Science University.'
    },
     {
      'name': 'Michael Baudis',
      'title': 'Metadata Task Team Co-chair',
      'institute': 'Swiss Intstitute of Bioinformatics (SIB)',
      'image': image_root + 'michael_baudis.jpg',
      'bio': 'Professor of Bioinformatics and group leader at the Swiss Intstitute of Bioinformatics (SIB), with a focus on computational cancer genomics and data repositories.'
    }, {
      'name': 'Frank Austin Nothaft',
      'title': 'Containers and Workflows Task Team Co-hair',
      'institute': 'University of California, Berkeley',
      'image': image_root + 'frank_nothaft.jpg',
      'bio': 'Frank Austin Nothaft is a MS/PhD student in Computer Science at UC Berkeley AMPLab and IC Design engineer at Broadcom Corp. His research focuses on optimizing commodity distributed systems for scientific application to explore biological phenomena.'
    },
     {
      'name': 'Suzanna Lewis',
      'title': 'Metadata Task Team Co-chair',
      'institute': 'Lawrence Berkeley National Laboratory',
      'image': image_root + 'suzanna_lewis.jpg',
      'bio': 'Suzanna (Suzi) E. Lewis is a scientist and Principal Investigator at the Berkeley Bioinformatics Open-source Project (BBOP) based at Lawrence Berkeley National Laboratory. Lewis leads the development of open standards and software for genome annotation and ontologies'
    },
     {
      'name': 'Steve Brenner',
      'title': 'Variant Annotation Task Team Co-chair' ,
      'institute': 'University of California, Berkeley',
      'image': image_root + 'steve_brenner.jpg',
      'bio': 'Professor, University of California Berkeley and Chair of the Graduate Program in Computational Biology.'
    },
    
     {
      'name': 'Roderic Guido',
      'title': 'RNAseq Task Team Co-chair' ,
      'institute': 'Center for Genomic Regulation (CRG)',
      'image': image_root + 'roderic_guido.jpg',
      'bio': 'Roderic Guigo is head of the Bioinformatics and Genomics Program from the Center for Genomic Regulation (CRG) in Barcelona, and Bioinformatics Professor at the University Pompeu Fabra (Barcelona)'
    },
    {
      'name': 'Peter Amstutz',
      'title': 'Containers and Workflows Task Team Co-chair',
      'institute': 'Curoverse',
      'image': image_root + 'peter_amstutz.jpg',
      'bio': 'Peter Amstutz is a senior software developer at Curoverse, Inc and contributor to the Arvados and Common Workflow Language projects.'
    },
    {
      'name': 'Marc Fiume',
      'title': 'Beacon Project Chair',
      'institute': 'DNAStack',
      'image': image_root + 'marc_fiume.jpg',
      'bio': 'Marc Fiume is CEO of DNAstack, developing cloud based solutions for genomic data sharing and analysis.'
    },
    {
      'name': 'Thomas Keane',
      'title': 'File Formats Task Team Co-chair',
      'institute': 'Wellcome Trust Sanger Institute',
      'image': image_root + 'thomas_keane.jpg',
      'bio': 'Thomas Keane leads the Sequence Variation Infrastructure group at the Wellcome Trust Sanger Institute. His group develops computational methods and representations of sequencing data at multiple levels: the raw reads from the sequencing machines; the tools and standardised data representations to carry out primary data processing and variant calling; and creating multiple laboratory mouse strain reference genomes.'
    },
  ];

});
